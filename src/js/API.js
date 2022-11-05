import axios from "axios";

export default class ApiServise{
    constructor() {
        this.searchQuery = "";
        this.page = 1;
    }; 

     async fetchDefault() {
        try {
            const searchParams = new URLSearchParams({
                api_key: '411d08d89a4569fb1b50aec07ee6fb72', 
            });

             const request = `https://api.themoviedb.org/3/trending/all/week?${searchParams}`;

            const data = await axios.get(request);
            return data;
            
        } catch (error) {
            console.log(error.message)
        };

    }

    async fetch() {
        try {
            const searchParams = new URLSearchParams({
                api_key: '411d08d89a4569fb1b50aec07ee6fb72',
                language: 'en-US',
                query: this.searchQuery,
                page: this.page,
                include_adult: false,
            });
             const request = `https://api.themoviedb.org/3/search/movie?${searchParams}`;

        const data = await axios.get(request);
       
        // this.incrementPage();
            
            return data;
            
        } catch (error) {
            console.log(error.message)
        };

    }

    get query() {
        return this.searchQuery;
    };

    set query(newQuery) {
        this.searchQuery = newQuery;
    };

    incrementPage() {
        this.page +=1
    };

    resetPage() {
        this.page = 1;
    }
};