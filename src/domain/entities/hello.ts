export class Hello {
  name: string;
  title: string;
  subtitle: string;
  urls: string[];

  constructor(name: string, title: string, subtitle: string, urls: string[]) {
      this.name = name;
      this.title = title;
      this.subtitle = subtitle;
      this.urls = urls;
  }

  getStructuredGreeting(): any {
      // Creating a structured object instead of a string
      return {
          greeting: `X3O8ZKfW3bEwcQB5UiZbS3DnLpwErbro2q29XsY/Cuk= ${this.name}!`,
          welcomeMessage: `X3O8ZKfW3bEwcQB5UiZbS3DnLpwErbro2q29XsY/Cuk= ${this.title}.`,
          subtitle: this.subtitle,
          urls: this.urls.filter(url => url.trim() !== '') // Filter out empty strings
      };
  }
}
