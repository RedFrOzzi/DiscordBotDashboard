import { RgbColor } from "react-colorful";
import Embed from "../models/embed/Embed";
import EmbedAuthor from "../models/embed/EmbedAuthor";
import EmbedField from "../models/embed/EmbedField";
import EmbedFooter from "../models/embed/EmbedFooter";
import EmbedImage from "../models/embed/EmbedImage";
import EmbedThumbnail from "../models/embed/EmbedThumbnail";

export default class EmbedBuilder {
  content = [
    { index: 0, name: "Заглавие" },
    { index: 1, name: "Описание" },
    { index: 2, name: "Ссылка" },
    { index: 3, name: "Время" },
    { index: 5, name: "Футер" },
    { index: 6, name: "Картинка" },
    { index: 7, name: "Иконка" },
    { index: 8, name: "Автор" },
    { index: 9, name: "Поле" },
  ];

  embed: Embed;

  hasTitle = false;
  hasDescription = false;
  hasUrl = false;
  hasFooter = false;
  fieldsCount = 0;

  constructor() {
    this.embed = {
      title: null,
      description: null,
      url: null,
      timestamp: null,
      color: null,
      footer: null,
      image: null,
      thumbnail: null,
      author: null,
      fields: null,
    };
    this.fieldsCount = 0;
  }

  public chooseElement(index: number) {
    switch (index) {
      case 0:
        this.hasTitle = true;
        this.removeTitleOption();
        break;
      case 1:
        this.hasDescription = true;
        this.removeDescriptionOption();
        break;
      case 2:
        this.hasUrl = true;
        this.removeUrlOption();
        break;
      case 3:
        this.removeTimestampOption();
        break;
      case 5:
        this.embed.footer = { text: "", icon_url: null };
        this.hasFooter = true;
        this.removeFooterOption();
        break;
      case 6:
        this.removeImageOption();
        break;
      case 7:
        this.removeThumbnailOption();
        break;
      case 8:
        this.removeAuthorOption();
        break;
      case 9:
        this.fieldsCount += 1;
        this.tryRemoveFieldOption();
        break;
    }
  }

  public addTitle(text: string) {
    this.embed.title = text;
  }
  private removeTitleOption() {
    this.content = this.content.filter((item) => item.index !== 0);
  }

  public addDescription(text: string) {
    this.embed.description = text;
  }
  private removeDescriptionOption() {
    this.content = this.content.filter((item) => item.index !== 1);
  }

  public addUrl(text: string) {
    this.embed.url = text;
  }
  private removeUrlOption() {
    this.content = this.content.filter((item) => item.index !== 2);
  }

  public addTimestamp(text: string) {
    this.embed.timestamp = text;
  }
  private removeTimestampOption() {
    this.content = this.content.filter((item) => item.index !== 3);
  }

  public changeColor(color: RgbColor) {
    this.embed.color = color;
  }

  public changeFooterText(text: string) {
    console.log(this.embed);
  }
  private removeFooterOption() {
    this.content = this.content.filter((item) => item.index !== 5);
  }

  public addImage(image: EmbedImage) {
    this.embed.image = image;
  }
  private removeImageOption() {
    this.content = this.content.filter((item) => item.index !== 6);
  }

  public addThumbnail(thumbnail: EmbedThumbnail) {
    this.embed.thumbnail = thumbnail;
  }
  private removeThumbnailOption() {
    this.content = this.content.filter((item) => item.index !== 7);
  }

  public addAuthor(author: EmbedAuthor) {
    this.embed.author = author;
  }
  private removeAuthorOption() {
    this.content = this.content.filter((item) => item.index !== 8);
  }

  public addField(field: EmbedField) {
    if (this.embed.fields === null || this.embed.fields.length === 0) {
      this.embed.fields = [field];
      return;
    }

    this.embed.fields.push(field);
  }
  private tryRemoveFieldOption() {
    if (this.fieldsCount >= 6) {
      this.content = this.content.filter((item) => item.index !== 9);
    }
  }
}
