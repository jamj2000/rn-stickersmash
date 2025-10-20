import { Image } from 'expo-image'
import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const AboutPage = () => {
    return (
        <View style={{ flex: 1, gap: 10, padding: 10, fontSize: 20 }}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
                About page
            </Text>
            <Text style={styles.text}>
                Esta aplicación ha sido desarrollada siguiendo
                <Link style={{ color: 'blue' }} href="https://docs.expo.dev/tutorial/introduction/"> este tutorial</Link>.
            </Text>
            <Text style={styles.text}>
                Se ha prescindido de Typescript, para simplificar la lectura del código.
            </Text>
            <Link href="/" style={styles.link}>
                <Image source={require('@/assets/images/icon.png')}
                    style={styles.image}
                />
            </Link>
        </View>
    )
}

export default AboutPage

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    link: {
        alignSelf: 'center',
        marginTop: 100,
    }
})