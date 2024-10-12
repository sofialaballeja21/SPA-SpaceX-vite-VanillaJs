const API = 'https://api.spacexdata.com/v5/launches'

export const getData = async () => {
    try {
        const response = await fetch(API); 
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error: ', error);
    }
};


