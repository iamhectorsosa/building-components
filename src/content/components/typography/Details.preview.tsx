import { Details } from "./Details";

export default function Preview() {
  return (
    <div className="w-full">
      <Details>
        <summary>
          <h3>Summary One</h3>
        </summary>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan
          neque ipsum. Nunc ligula eros, elementum sit amet blandit eu, egestas at
          justo.</p>
      </Details>
      <Details>
        <summary>
          <h3>Summary Two</h3>
        </summary>
        <div className="space-y-3">
          <p>Proin in dapibus nulla. Nam vitae est vitae tellus mollis eleifend in eu
            erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Aenean feugiat ante porttitor purus elementum, eget
            vestibulum ex volutpat. Sed gravida convallis rutrum. Quisque pharetra eros
            eget malesuada vulputate.</p>
          <h4 className="font-semibold">Sub Heading</h4>
          <p>Cras maximus interdum interdum. Maecenas vitae ligula et eros porta feugiat.
            Nullam facilisis odio non ante varius tempor ut ac turpis.</p>
        </div>
      </Details>
    </div>
  )
}