import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout'
export default function Home() {
    return (
        <Layout>
            <Card>
                <CardHeader>
                    <Typography>
                        <h1>Home</h1>
                        <h3>Home page</h3>
                    </Typography>
                </CardHeader>
                <CardContent>

                </CardContent>
            </Card>   
        </Layout>
    )
}
