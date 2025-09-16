type Detail = {
    label: string;
    value: string;
};

export type User = {
    username: string;
    avatar: string;
    details: Detail[];
}

export type Note = {
    id: string;
    title: string;
    content: string;
    date: string;
    tags: string[];
}