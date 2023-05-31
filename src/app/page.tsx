import { CONTENT_DIR, categories } from '@config';
import { join } from 'path';
import { readFileSync, readdirSync } from 'fs';
import { getHighlighter, highlight } from '@lib/shiki';
import { Preview } from '@components/Preview';

export default async function Home() {
  const data = await getComponentsByCategory();
  return (
    <div className="w-full">
      <section className="grid grid-cols-1 gap-y-8">
        {data.map(({ name, description, components }, index) => (
          <article key={index} className="grid grid-cols-1 space-y-2">
            <h2 className="font-bold text-3xl">{name}</h2>
            <p className="line-clamp-2">{description}</p>
            <div className="grid grid-cols-1 py-2 space-y-6 h-fit">
              {components.map(
                (props, index) => {
                  return (
                    <Preview key={index}
                      {...props}
                    />
                  )
                })}
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

const getComponentsByCategory = async () => {

  const componentFilesByCategory = categories.map(({ id, name, description }) => {
    const categoryPath = join(process.cwd(), CONTENT_DIR, id);
    const files = readdirSync(categoryPath);
    return {
      id,
      name,
      description,
      files,
    }
  })

  const highlighter = await getHighlighter();

  return await Promise.all(componentFilesByCategory.map(async ({
    id,
    name,
    description,
    files,
  }) => {
    const categoryPath = join(process.cwd(), CONTENT_DIR, id);
    const componentsData = files
      .reduce((result: { id: string; preview: string, source: string }[], file: string) => {
        const id = file.replace(/(\.preview)?\.tsx$/, '');
        const existingItem = result.find(item => item.source === id);

        const fileData = readFileSync(join(categoryPath, file), "utf8");

        if (file.includes('.preview.tsx')) {
          existingItem
            ? (existingItem.preview = fileData)
            : result.push({ id, preview: fileData, source: id });
        } else {
          existingItem
            ? (existingItem.source = fileData)
            : result.push({ id, source: fileData, preview: '' });
        }

        return result;
      }, [])
      .filter(item => item.preview && item.source);

    const components = await Promise.all(componentsData.map(async (item) => {
      const Component = (await import(`../content/components/${id}/${item.id}.preview`)).default;
      const preview = await highlight(highlighter, item.preview);
      const source = await highlight(highlighter, item.source);
      return ({
        id: item.id,
        component: <Component />,
        preview,
        source
      })
    }))

    return {
      id,
      name,
      description,
      components
    };
  }));
}
