//importar el modelo

import BlogModel from "../models/BlogModel.js";
// METODOS PARA EL CRUD

//Mostrar todos los blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll();
    res.json(blogs);
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Mostrar un blog
export const getBlog = async (req, res) => {
  try {
    const blog = await BlogModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(blog[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Crear  un blog
export const createBlog = async (req, res) => {
  try {
    await BlogModel.create(req.body);
    console.log('ahora')
    res.json({
      message: "Blog creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
}; 
//Actualizar un blog
export const updateBlog = async (req, res) => {
  try {
    await BlogModel.update(req.body, { where: { id: req.params.id } });

    res.json({
      message: "Blog actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Eliminar un blog
export const deleteBlog=async (req,res)=>{
  try {
    await BlogModel.destroy(req.body, { where: { id: req.params.id } ,     truncate: true
    });
    console.log('ahora')
   

    res.json({
      message: "Blog eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });

  }
}
export const deleteBlog1 = async (req, res) => {
  const { id} = req.params;
  try {
    await BlogModel.destroy( { where: { id } });

    res.json({
      message: "Blog eliminado correctamente!",
    });
  } catch (error) { 
    res.status(500).json({ message: error.message });
  }
};