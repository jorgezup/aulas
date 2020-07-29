import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

import api from './services/api'

//Não possuem valor semântico (significado)
//Não possuem estilização própria

//View: div, foot, header, main, aside, section
//Text: p, span, strong, h1, h2

export default function App() {
    const [projects, setProjects] = useState([])

    // useEffect(() => {
    //     api.get('projects').then(response => {
    //         console.log(response.data)
    //         setProjects(response.data)
    //     })
    // }, [])


    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="red"/>
            <View style={styles.container}>
                {projects.map(project => <Text key={project.id}>{project.title}</Text> )}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems:'center',
        justifyContent: 'center'
    },
    title: {
        color:'#fff',
        fontSize:32,
        fontWeight:'bold',
    }
})