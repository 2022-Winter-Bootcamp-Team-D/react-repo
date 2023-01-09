declare module "*.scss" {
    const content: { [className: string]: string };
    export = content;
  }

  //scss를 임포트하기 위한 명령어, 전범위에 scss가 적용되기 위해서 진행됨, 이를 글로벌 디클레어