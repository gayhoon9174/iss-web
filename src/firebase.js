import firebase from "firebase/app";
import { ref, onUnmounted } from 'vue'

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDqCGYndhu689UKmsvuiZvIv-OOj5Wvna8",
    authDomain: "newproject-4a333.firebaseapp.com",
    projectId: "newproject-4a333",
    storageBucket: "newproject-4a333.appspot.com",
    messagingSenderId: "946499293401",
    appId: "1:946499293401:web:f305dd073cd387b279aec8"
};

//파이어베이스(파이어스토어) 사용을 위한 초기 userCollection 설정
const firebaseApp = firebase.initializeApp(firebaseConfig)  //파이어베이스 초기화
const db = firebaseApp.firestore()  //초기화된 파이어베이스의 파이어스토어를 db로 지정
const usersCollection = db.collection('users')

//파이어스토어 user 추가
export const createUser = user => {
    return usersCollection.add(user)
}

//파이어스토어 user 정보 받기
export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}

//파이어스토어 user 정보 수정
export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
}

//파이어스토어 user 정보 삭제
export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}

//파이어스토어 user 리스트 불러오기
export const useLoadUsers = () => {
    const users = ref([])
    const close = usersCollection.onSnapshot(snapshot => {
        users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return users
}
