type LinkType = {
    name: string;
    hash: string;
    special?: boolean;
};


export const links: LinkType[] = [

    {
        name: "sobre",
        hash: "#sobre",
    },
    {
        name: "projetos",
        hash: "#projetos",
    },

    {
        name: "contato",
        hash: "#contato",
        special: true
    },
] as const;