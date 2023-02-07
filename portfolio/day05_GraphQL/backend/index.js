import { ApolloServer, gql } from 'apollo-server'


const createUser=(email, name, phone, personal, prefer)=>{
    const user = {
        email,
        name,
        phone,
        personal,
        prefer,
    }
    return user
}
// coffeePlease userList
const coffeeInfo=(name, kcal)=>{
    const coffee = {
        name,
        kcal
    }
    return coffee
}

const typeDefs = gql`
    type coffeeInfo {
        name: String
        kcal: Int
    }

    type createUser {
        email: String
        name: String
        phone: String
        personal: String
        prefer: String
    }

    type Query {
        coffeePlease:[coffeeInfo]
        userList:[createUser]
    }
`;

const resolvers = {
    Query : {
        coffeePlease: ()=>{
            const result = [
                coffeeInfo('아메리카노',5),
                coffeeInfo('카페라떼',10),
                coffeeInfo('콜드브루',15),
                coffeeInfo('카페모카',50),
                coffeeInfo('돌체라떼',500),
                coffeeInfo('카라멜라뗴',200),
                coffeeInfo('바닐라라떼',20),
                coffeeInfo('에스프레소',1),
                coffeeInfo('디카페인',5),
                coffeeInfo('오트라떼',300),
            ]
                return result
        },
        userList: ()=>{
            const result = [
                createUser("aaa@aaa.com","철수","010-1234-5678","220110-2222222","https://naver.com") ,
                createUser("Nick@nick.com","Nick","010-1234-5678","220219-0000000","https://naver.com"),
                createUser("Judy@judy.com","Judy","010-1234-5678","220219-0000000","https://naver.com"),
                createUser("Anna@anna.com","Anna","010-1234-5678","220219-0000000","https://naver.com"),
                createUser("Elsa@elsa.com","Elsa","010-1234-5678","220219-0000000","https://naver.com"),
            ]
                return result
        },
    },
};



const app = new ApolloServer({
    typeDefs,
    resolvers,
});

app.listen(3000).then(({url})=>{
    console.log(`🚀 Server ready at ${url}`);
});