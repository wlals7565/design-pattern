import DisplayArticleTemplate from "./DisplayArticleTerm";
import Article from "./article";

export default class EditableDisplayArticle extends DisplayArticleTemplate {
  protected titleHtml(): string {
    return `<div><span>제목</span><input value='${this.article.getTitle()}'></div>`;
  }
  protected contentHtml(): string {
    const items = this.article.getContent().map(item => `${item}\n`)
    return `<span>내용</span><br /><textarea cols = '50' rows='5'>${items.join('')}</textarea>`
  }
  protected footerHtml(): string {
    return `<div><span>글쓴이</span><input value='${this.article.getFooter()}'/></div>`
  }
  constructor(article: Article) {
    super(article);
  }
}
