import { createSlice } from "@reduxjs/toolkit"

interface folder {
    id: string
    folder: string
}
interface gallary {
    folderId: string
    id: string
    img: string
}
type albumState = {
    folder: folder[]
    gallary: gallary[]
}
//   type albumAction = {
//     type: string
//     payload: Ialbum
//   }

const initialState: albumState = {
    folder: [],
    gallary: []
}

const AlbumSlice = createSlice({
    name: "album",
    initialState,
    reducers: {
        addAlbum: (state, action) => {
            state.folder = [...state.folder, action.payload]

        },
        addGallary: (state, action) => {
            state.gallary = [...state.gallary, action.payload]
        },
        deleteFolder: (state, action) => {
            const newFolders = state.folder.filter((cur) => cur.id !== action.payload);
            const newImages = state.gallary.filter((cur) => cur.folderId !== action.payload);
            state.folder = newFolders;
            state.gallary = newImages;
        }
    }
})

export const { addAlbum, addGallary, deleteFolder } = AlbumSlice.actions;
export default AlbumSlice.reducer;