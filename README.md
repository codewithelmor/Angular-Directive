# AngularDirective

In Angular, **`directives`** are a powerful way to extend the behavior of HTML elements. You can create custom directives to encapsulate and reuse specific behaviors across your application. Here's a step-by-step guide on how to create a custom directive in Angular:

1. **`Create a New Directive`**:
Start by generating a new directive using the Angular CLI or create the files manually. Let's use the CLI for simplicity:

```bash
ng generate directive highlight
```

This command will create a new file named highlight.directive.ts in the src/app directory.

2. **`Implement the Directive Logic`**:
Open the **`highlight.directive.ts`** file, and you'll see something like this:

```typescript
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }

}
```

You can add your custom logic inside the **`HighlightDirective`** class.

3. **`Add Behavior to the Directive`**:
Let's say you want the directive to change the background color of the element it's applied to. Update the directive to look like this:

```typescript
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
```

This directive uses the **`Renderer2`** service to manipulate the DOM and responds to mouse enter and leave events to highlight and unhighlight the element.

4. **`Use the Directive in a Component`**:
Open a component where you want to use the directive (e.g., **`app.component.html`**), and apply the directive to an HTML element:

```html
<p appHighlight>
  Hover over me to see the highlight effect!
</p>
```

The **`appHighlight`** attribute is the selector you defined for your custom directive.

5. **`Include the Directive in Module`**:
Make sure to include the directive in the **`declarations`** array of your module (e.g., **`app.module.ts`**):

```typescript
// other imports...
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    // other components, directives, pipes...
    HighlightDirective
  ],
  // other module configuration...
})
export class AppModule { }
```

This makes the directive available for use in your application.

Now, when you hover over the element with the **`appHighlight`** directive, you should see the background color change. This is a basic example, and you can customize the directive to add more complex behavior based on your requirements.

# Screenshot

![2023-11-21 20-01-43](https://github.com/codewithelmor/Angular-Directive/assets/44918452/a67477e8-b72d-4b68-b7cf-2ebc13318561)

# Commands

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
