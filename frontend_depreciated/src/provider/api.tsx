import axios, { AxiosResponse } from 'axios';

interface QueryParameters {
    limit: number;
    offset: number;
  }

interface ApiResponse {
    totalProperties: number;
    list: [];
  }
  
const apiUrl = 'https://m9ojazlunf.execute-api.ap-southeast-1.amazonaws.com/test';

export async function fetchData(queryParameters: QueryParameters): Promise<AxiosResponse<ApiResponse>> {
    try {
        const response = await axios.get<ApiResponse>(`${apiUrl}/endpoint`, {
            params: queryParameters,
        });

        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
}