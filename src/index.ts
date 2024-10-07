import aspida from "@aspida/axios";
import api from "../api/$api";

const client = api(aspida());

const user = client.v1.users.$get();

user.then((user) => {
  console.log({ id: user.id, name: user.name });
  // user -> { id: 0, name: "taro" }
})
