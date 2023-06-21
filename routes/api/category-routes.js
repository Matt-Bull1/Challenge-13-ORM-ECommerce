const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const getCategory = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(getCategory)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const oneCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    res.status(200).json(oneCategory)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const createCategory = await Category.create(req.body)
    res.status(200).json(createCategory)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.params.id)
    res.status(200).json(updateCategory)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const destroyCategory = await Category.destroy(req.params.id)
    res.status(200).json(destroyCategory)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
