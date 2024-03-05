import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, STATUSES } from '../store/productSlice';

function Products() {
    const cartItems = useSelector((state) => state.cart);
    const [cartItemIds, setCartItemIds] = useState([]);
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    useEffect(() => {
        const ids = cartItems.map((item) => item.item.id);
        setCartItemIds(ids);
    }, [cartItems]);

    const handleAdd = (item) => {
        dispatch(add({ item: item, qty: 1 }));
    };

    if (status === STATUSES.LOADING) return <h2>Loading</h2>;
    if (status === STATUSES.ERROR) return <h3>Something went wrong</h3>;

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {products?.map((item) => (
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} key={item.id} sx={{ width: 275 }}>
                        <CardContent>
                            <img src={item.image} width="100vw" height="100vh" alt="" />
                            <Typography variant="h5" component="div">
                                ${item.price}
                            </Typography>
                            <Typography variant="body2">{item.title}</Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {item.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                onClick={() => handleAdd(item)}
                                style={{ backgroundColor: '#6abdeb' }}
                                size="small"
                                disabled={cartItemIds.includes(item.id)}
                            >
                                {cartItemIds.includes(item.id) ? 'Item Added' : 'Add to cart'}
                            </Button>
                        </CardActions>
                    </Box>
                ))}
            </div>
        </>
    );
}

export default Products;
