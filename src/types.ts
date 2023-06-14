export type Template = {
    pages: Array<TemplatePage>;
}

export type BasePage = {
    name: string;
    alias: string;
}

export type TemplatePage = BasePage & { floorplan?: object; }

export type CommonStore = {
    pages: Array<TemplatePage>;
    activePage: string;
}