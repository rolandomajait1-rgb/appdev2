import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'react-native'

const ProfileDemo = () => {
    const petPeeves = [
        'Talking loudly during lectures',
        'Using Phone during lectures',
        'Always late to class'
    ]

    return (
        <LinearGradient colors={['#E8D5F2', '#B794D9', '#8B5BA8']} style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.grid}>


                    <View style={[styles.card, styles.profileCard]}>
                        <Image
                            source={require('./assets/white_hair_blue_eyes_satoru_gojo_hd_jujutsu_kaisen_3.jpg')}
                            style={styles.imageBox}
                        />
                        <View>
                            <Text style={styles.profileName}>Rolando Majait</Text>
                            <Text style={styles.profileSubtitle}>BSIS - 3B</Text>
                            <Text style={styles.profileNumber}>24</Text>
                        </View>
                    </View>
                    <View style={styles.profileNormal}>
                        <Text style={styles.profileNormal}>Favorite Hobby</Text>
                        <Image
                            source={require('./assets/hobby.png')}
                            style={styles.imageBox2}
                        />
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Using Blender for project animation</Text>
                    </View>

                    <View style={[styles.card, styles.largeCard]}>
                        <Text style={styles.petText}>Editing and photography for the project.</Text>
                    </View>
                </View>

                {petPeeves.map((peeve, index) => (
                    <View key={index} style={styles.userCard}>
                        <View style={styles.iconCircle}>
                            <Text style={styles.iconArrow}>↑</Text>
                        </View>
                        <View>
                            <Text style={styles.userName}>{peeve}</Text>
                            <Text style={styles.userSubtitle}>Pet Peeve #{index + 1}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 15
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
        marginBottom: 20
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 20,
        padding: 20,
        width: '47%'
    },
    imageBox: {
        height: 120,
        width: '45%',
        borderRadius: 15,
        marginRight: 15
    },
    cardTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#bc5eff'
    },
    profileCard: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        shadowColor: 'blue',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8
    },
    profileName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000'
    },
    profileSubtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
        alignItems: 'baseline'
    },
    profileNumber: {
        fontSize: 72,
        fontWeight: 'bold',
        color: '#7B68EE',
        marginTop: -10
    },
    profileNormal: {
        fontSize: 40,
        marginTop: 3,
        alignItems: 'baseline',
        fontFamily: '',
        fontWeight: 'bold',
        backgroundColor: 'linear-gradient(90deg, \#d79aa9, \#ce5268)',
        flexDirection: 'row',
        alignItems: 'center',
        color: '#0f4471',
    },
    imageBox2: {
        height: 170,
        width: '45%',
        borderRadius: 15,
        marginRight: 15,
        resizeMode: 'small',
    },
    hobbyCard: {
        height: 180,
        justifyContent: 'flex-end'
    },
    animeImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 120,
        backgroundColor: '#D0D0D0',
        borderRadius: 15
    },
    hobbyText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#bc5eff'
    },
    largeCard: {
        width: '47%',
        height: 180,
        justifyContent: 'flex-start',
        color: '#D0D0D0'
    },
    petText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#e14871'

    },
    userCard: {
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 20,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    iconCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#8B0000',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    iconArrow: {
        fontSize: 24,
        color: '#8B0000'
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    userSubtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 2
    }
})

export default ProfileDemo
