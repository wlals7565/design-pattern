import DisplayArticleTemplate from "./DisplayArticleTerm";
import Article from "./article";

export default class SimpleDisPlayArticle extends DisplayArticleTemplate{
  constructor(article: Article) {
    super(article);
  }
  protected titleHtml(): string {
    return `<h1>${this.article.getTitle()}</h1>`
  }
  protected contentHtml(): string {
    const items = this.article.getContent().map(item => `<li>${item}</li>`)
    return `<ul>${items.join("")}</ul>`
  }
  protected footerHtml(): string {
    return `<h3>${this.article.getFooter()}</h3>`
  }
  
}