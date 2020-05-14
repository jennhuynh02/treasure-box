import axios from 'axios';

// Admin only
export const getTreasures = () => {
    return axios.get(`/api/treasure/all`);
};

export const getTreasure = (userId) => {
    // debugger
    return axios.get(`api/treasure/new/${userId}`);
};

export const destroyTreasure = (treasureId) => {
    return axios.delete(`api/treasure/${treasureId}`);
}

export const postTreasure = (treasure) => (
    axios.post('/api/treasure/upload', treasure, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${treasure._boundary}`,
        }
    })
);

// export const getUserTreasures = (currentUser) => {
//     return axios.get(`api/treasure/savedTreasure/${currentUser.id}`);
// };

export const updateTreasure = (treasure) => (
    axios.put(`/api/treasure/update`, treasure)
)