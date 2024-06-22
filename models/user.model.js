import { pool } from "../database/connection.js";

const ListUsers = async () => {
  try {
    const query = "SELECT listar_usuarios()";
    const { rows } = await pool.query(query);
    return rows[0].listar_usuarios;
  } catch (error) {
    console.log("Error en la consulta a la BD: " + error);
  }
};

const RegisterUser = async (
  p_primer_nombre,
  p_segundo_nombre,
  p_primer_apellido,
  p_segundo_apellido,
  p_identificacion,
  p_fecha_nacimiento,
  u_username,
  u_password,
  u_status
) => {
  try {
    const query = "SELECT agregar_usuario($1, $2, $3, $4, $5, $6, $7, $8, $9)";
    const { rows } = await pool.query(query, [
      p_primer_nombre,
      p_segundo_nombre,
      p_primer_apellido,
      p_segundo_apellido,
      p_identificacion,
      p_fecha_nacimiento,
      u_username,
      u_password,
      u_status,
    ]);
    return rows[0].agregar_usuario;
  } catch (error) {
    console.log("Error en la consulta a la BD: " + error);
  }
};

const RegisterRole = async (p_role_name) => {
  try {
    const query = "SELECT agregar_rol($1)";
    const { rows } = await pool.query(query, [p_role_name]);
    return rows[0].agregar_rol;
  } catch (error) {
    console.log("Error en la consulta a la BD: " + error);
  }
};

const AssignRole = async (p_idRole, p_idUsuario) => {
  try {
    const query = "SELECT asignar_rol_usuario($1, $2)";
    const { rows } = await pool.query(query, [p_idRole, p_idUsuario]);
    return rows[0].asignar_rol_usuario;
  } catch (error) {
    console.log("Error en la consulta a la BD: " + error);
  }
};

const ActiveUser = async (p_idUsuario) => {
  try {
    const query = "SELECT activar_usuario($1)";
    const { rows } = await pool.query(query, [p_idUsuario]);
    return rows[0].activar_usuario;
  } catch (error) {
    console.log("Error en la consulta a la BD: " + error);
  }
};

const InactiveUser = async (p_idUsuario) => {
  try {
    const query = "SELECT inactivar_usuario($1)";
    const { rows } = await pool.query(query, [p_idUsuario]);
    return rows[0].inactivar_usuario;
  } catch (error) {
    console.log("Error en la consulta a la BD: " + error);
  }
};

const CloseSession = async (p_idSesion) => {
  try {
    const query = "SELECT cerrar_sesion($1)";
    const { rows } = await pool.query(query, [p_idSesion]);
    return rows[0].cerrar_sesion;
  } catch (error) {
    console.log("Error en la consulta a la BD: " + error);
  }
};

const LoginUser = async (u_username, u_password) => {
  try {
    const query = "SELECT loguear_usuario($1, $2)";
    const { rows } = await pool.query(query, [u_username, u_password]);
    return rows[0].loguear_usuario;
  } catch (error) {
    console.log("Error en la consulta a la BD: " + error);
  }
};

export const userModel = {
  ListUsers,
  RegisterUser,
  RegisterRole,
  ActiveUser,
  InactiveUser,
  AssignRole,
  CloseSession,
  LoginUser,
};
