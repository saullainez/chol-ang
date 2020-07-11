export interface Menu {
    id: number;
    description: string;
    icon: string;
    count: number
    sub_menu: {
        id: number;
        sub_desc: string;
        sub_icon: string;
        uri: string;
    }
}
