import { View, Text, FlatList, Dimensions } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import PlaceItem from './PlaceItem'
import { SelectMarkerContext } from '../../Context/SelectMarkerContext';
import { getFirestore } from 'firebase/firestore';
import { app } from '../../Utils/FirebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";
import { useUser } from '@clerk/clerk-expo';

export default function PlaceListView({ placeList }) {
  const flatListRef = useRef(null);

  const { user } = useUser();
  const [favList, setFavList] = useState([]);
  const { selectedMarker, setSelectedMarker } = useContext(SelectMarkerContext)
  useEffect(() => {
    //  selectedMarker&&scrollToIndex(selectedMarker)
  }, [selectedMarker])

  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  }

  const getItemLayout = (_, index) => ({
    length: Dimensions.get('window').width,
    offset: Dimensions.get('window').width * index,
    index
  })

  const db = getFirestore(app)
  useEffect(() => {
    user && getFav();
    // setSelectedMarker(placeList[0]);
    // scrollToIndex(0);
  }, [user])
  
  const getFav = async () => {
    setFavList([]);
    const q = query(collection(db, "ev-fav-place"),
      where("email", "==", user?.primaryEmailAddress?.emailAddress));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setFavList(favList => [...favList, doc.data()]);
    });
  }

  const isFav=(place)=>{
    const result=favList.find(item=>item.place.id==place.id)
    console.log(result)
    return result?true:false;
  }

  return (
    <View>
      <FlatList
        horizontal={true}
        data={placeList}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        getItemLayout={getItemLayout}
        renderItem={({ item, index }) => (
          <View key={index}>
            <PlaceItem place={item} isFav={isFav(item)} markedFav={()=>getFav()} />
          </View>
        )}

      />
    </View>
  )
}