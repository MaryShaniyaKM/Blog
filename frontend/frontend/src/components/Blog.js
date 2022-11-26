import React from 'react'
import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from "@mui/material";
function Blog({ title, description, imageURL, userName}) {
    return (
        <div>
            <Card sx={{
                width: "40%", margin: "auto", mt: 2,
                padding: 2,
                boxShadow: "5px 5px 10px #ccc",
                ":hover": {
                    boxShadow: "10px 10px 20px #ccc",
                },
            }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            {userName}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            
                        </IconButton>
                    }
                    title={title}
                    
                />
                <CardMedia
                sx={{height:"250px",width:'200px',margin:"auto"}}
                    component="img"

                    image={imageURL}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                       {description}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )
}

export default Blog