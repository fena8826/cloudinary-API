import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export const loading = () => {
    return { type: "LOADING" };
};

export const addProductSUC = (data) => {
    return {
        type: "ADD_PRODUCT_SUC",
        payload: data
    };
};

export const addProductRej = (err) => {
    return {
        type: "ADD_PRODUCT_REJ",
        payload: err
    };
};

export const getAllProducts = (data) => {
    return {
        type: "GET_ALL_PRODUCTS_SUC",
        payload: data
    };
};

export const getProductsRej = (err) => {
    return {
        type: "GET_ALL_PRODUCTS_REJ",
        payload: err
    };
};

export const getProduct = (data) => {
    return {
        type: "GET_PRODUCT",
        payload: data
    };
};

export const updateProduct = () => {
    return { type: "UPDATE_PRODUCT" };
};

export const getAllProductAsync = () => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let result = [];
            let resRef = await getDocs(collection(db, 'products'));
            resRef.forEach((docItem) => {
                result.push({ ...docItem.data(), id: docItem.id });
            });

            dispatch(getAllProducts(result));
        } catch (error) {
            console.log(error);
            dispatch(getProductsRej(error.message));
        }
    };
};

export const addProductAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            await setDoc(doc(db, "products", data.id), data);

         
            dispatch(addProductSUC(data));
        } catch (error) {
            console.log(error);
            dispatch(addProductRej(error.message));
        }
    };
};

export const deleteProductAsync = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            await deleteDoc(doc(db, "products", id));
            dispatch(getAllProductAsync());
        } catch (error) {
            console.log(error);
            dispatch(addProductRej(error.message));
        }
    };
};

export const getProductAsync = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await getDoc(doc(db, "products", id));
            dispatch(getProduct({ ...res.data(), id: res.id }));
        } catch (error) {
            console.log(error);
            dispatch(addProductRej(error.message));
        }
    };
};

export const updateProductAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            await updateDoc(doc(db, "products", data.id), data);
            dispatch(updateProduct());
        } catch (error) {
            console.log(error);
            dispatch(addProductRej(error.message));
        }
    };
};
