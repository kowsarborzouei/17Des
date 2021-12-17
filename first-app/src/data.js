const data=[
    {
        id: 1,
        name: "bay List",
        description: "these is need for home",
        item: [{
            id:1,
            title: "milk",
            status: false,
        },
            {
                id:2,
                title: "cheese",
                status: false
            },]
    },
    {
        id: 2,
        name: "bay List",
        description: "these is need for home",
        item: [{
            id:1,
            title: "milk",
            status: false,
        },
            {
                id:2,
                title: "cheese",
                status: false
            },]
    },
]
export const makeRandomDomId=()=>{
    return parseInt(Math.random() * 10000);
};

export default data