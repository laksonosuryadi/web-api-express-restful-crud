var express = require('express');
var router = express.Router();
var controller = require('../controllers/memoController')

// router.get('/', function(req, res, next) {
//   res.send("mantap");
// });

router.get('/', controller.getMemo);
router.post('/', controller.createMemo);
router.put('/:id', controller.editMemo);
router.delete('/:id', controller.deleteMemo);

module.exports = router;
