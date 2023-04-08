const { Prisma, PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class ShoeController {
  static async getShoe(req, res) {
    const result = await prisma.shoe.findMany({});
    res.status(200).json(result);
  }

  static async getShoeById(req, res) {
    const result = await prisma.shoe.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(result);
  }

  static async addShoe(req, res) {
    const result = await prisma.shoe.create({
      data: {
        name: req.body.name,
        brand: req.body.brand,
        qty: req.body.qty,
        available: req.body.available,
      },
    });
    res.status(201).json(result);
  }

  static async updateShoe(req, res) {
    const result = await prisma.shoe.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        name: req.body.name,
        brand: req.body.brand,
        qty: req.body.qty,
        available: req.body.available,
      },
    });
    res.status(200).json(result);
  }

  static async deleteShoe(req, res) {
    const result = await prisma.shoe.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(result);
  }
}

module.exports = ShoeController;
