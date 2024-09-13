import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import { useClerk } from '@clerk/clerk-expo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

export default function ProfileScreen() {
  const { user } = useUser();
  const { signOut } = useClerk();


  const handleLogout = () => {
    signOut()
  };

  return (

    <View>
      <View style={{
        backgroundColor: '#add8e6',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.2,

      }}>

        <Text style={{ padding: 10, marginBottom: 180, fontFamily: 'Outfit-medium', fontSize: 30 }}>User Details</Text>
      </View>

      <View style={styles.container}>
        <Image
          source={{ uri: user?.imageUrl }}
          style={styles.profileImage}
        />

        <View style={styles.backgroundContainer}>
          <View style={{ paddingBottom: 10, paddingTop: 10, marginLeft: 20 }}>

            <FontAwesome name="user-circle" size={30} color="black" />
          </View>
          <Text style={styles.nameText}>{user?.fullName || 'No Name'}</Text>
        </View>


        <View style={styles.backgroundContainer}>
          <View style={{ paddingBottom: 10, paddingTop: 10, marginLeft: 20 }}>
          <Entypo name="email" size={24} color="black" />
          </View>
          <Text style={styles.emailText}>
            {user?.primaryEmailAddress?.emailAddress || 'No Email'}
          </Text>

        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: -50,


  },
  backgroundContainer: {
    marginBottom: 25,
    backgroundColor: '#add8e6',
    width: 320,
    height: 50,
    borderRadius: 10,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    elevation: 5,
    flexDirection: 'row',
  },
  profileImage: {
    width: 175,
    height: 175,
    borderRadius: 75,
    borderColor: '#add8e6',
    borderWidth: 3,
    marginBottom: 30,

  },
  nameText: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: 70
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: 70
  },
  logoutButton: {
    marginBottom: 20,
    backgroundColor: '#add8e6',
    width: 220,
    height: 50,
    borderRadius: 10,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    elevation: 5,
  },
  logoutButtonText: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: "center",
  }
});
