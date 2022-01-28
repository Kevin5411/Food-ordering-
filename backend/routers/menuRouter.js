import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Menu from "../models/menuModel.js";
import { isAdmin, isAuth } from "../utils.js";


const menuRouter = express.Router();

menuRouter.get('/', expressAsyncHandler(async (req, res) => {
      const menus = await Menu.find({});
      res.send(menus);
    })
  );

menuRouter.get('/seed', expressAsyncHandler(async(req,res)=> {
    await Menu.remove({});
    const createdMenus = await Menu.insertMany(data.menus);
     res.send({ createdMenus});
})
);


menuRouter.get('/:id',expressAsyncHandler(async(req,res)=> {
    const menu = await Menu.findById(req.params.id);
    if(menu) {
        res.send(menu);
    } else {
        res.status(404).send({message: 'menu mot found'});
    }
})
);

menuRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const menu = new Menu({
        name: 'sample name ' + Date.now(),
        image: '/images/p1.jpg',
        price: 0,
        category: 'sample category',
        type: 'sample type',
        countInStock: 0,
        rating: 0,
        numReviews: 0,
        description: 'sample description',
      });
      const createdMenu = await menu.save();
      res.send({ message: 'Menu Created', menu: createdMenu });
    })
  );

  menuRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const menuId = req.params.id;
      const menu = await menu.findById(menuId);
      if (menu) {
        menu.name = req.body.name;
        menu.price = req.body.price;
        menu.image = req.body.image;
        menu.category = req.body.category;
        menu.type = req.body.type;
        menu.countInStock = req.body.countInStock;
        menu.description = req.body.description;
        const updatedMenu = await menu.save();
        res.send({ message: 'Menu Updated', menu: updatedMenu });
      } else {
        res.status(404).send({ message: 'Menu Not Found' });
      }
    })
  );

 menuRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const menu = await Menu.findById(req.params.id);
      if (menu) {
        const deleteMenu= await menu.remove();
        res.send({ message: 'Menu Deleted',menu: deleteMenu });
      } else {
        res.status(404).send({ message: 'Menu Not Found' });
      }
    })
  );

export default menuRouter;