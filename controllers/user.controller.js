import { userModel } from "../models/user.model.js";

const GetListUsersController = async (req, res) => {
  try {
    const data = await userModel.ListUsers();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const RegisterUserController = async (req, res) => {
  try {
    const {
      p_primer_nombre,
      p_segundo_nombre,
      p_primer_apellido,
      p_segundo_apellido,
      p_identificacion,
      p_fecha_nacimiento,
      u_username,
      u_password,
      u_status,
    } = req.body;
    const response = await userModel.RegisterUser(
      p_primer_nombre,
      p_segundo_nombre,
      p_primer_apellido,
      p_segundo_apellido,
      p_identificacion,
      p_fecha_nacimiento,
      u_username,
      u_password,
      u_status
    );
    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const RegisterRoleController = async (req, res) => {
    try {
      const { p_role_name } = req.body;
      const response = await userModel.RegisterRole(p_role_name);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  };

  const AssignRoleController = async (req, res) => {
    try {
      const { p_idRole, p_idUsuario } = req.body;
      const response = await userModel.AssignRole(p_idRole, p_idUsuario);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  };

  const ActiveUserController = async (req, res) => {
    try {
      const { p_idUsuario } = req.body;
      const response = await userModel.ActiveUser(p_idUsuario);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  };

  const InactiveUserController = async (req, res) => {
    try {
      const { p_idUsuario } = req.body;
      const response = await userModel.InactiveUser(p_idUsuario);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  };

  const CloseSessionController = async (req, res) => {
    try {
      const { p_idSesion } = req.body;
      const response = await userModel.CloseSession(p_idSesion);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  };

  const LoginUserController = async (req, res) => {
    try {
      const { u_username, u_password } = req.body;
      const response = await userModel.LoginUser(u_username, u_password);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  };

export const userController = {
  GetListUsersController,
  RegisterUserController,
  RegisterRoleController,
  AssignRoleController,
  ActiveUserController,
  InactiveUserController,
  CloseSessionController,
  LoginUserController
};
