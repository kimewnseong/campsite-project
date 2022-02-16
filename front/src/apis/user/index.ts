import { EditUserData } from "@src/types/apis/user";
import axios from "axios";

// 로그인 유저 정보
const getSinginUser = async () => {
  const result = await axios.get("user");

  return result;
};

// 유저 정보
const getUserInfo = async (id: string) => {
  const result = await axios.get(`user/${id}`);

  const { data } = result;

  return data;
};

// 로그인 유저 정보 수정
const editUserInfo = async (body: EditUserData) => {
  const result = await axios.put("user", body);
  const { data } = result;

  return data;
};

// 로그아웃
const signout = async () => {
  const result = await axios.post("auth/signout");
  const { data } = result;

  return data;
};

export default { editUserInfo, getSinginUser, getUserInfo, signout };