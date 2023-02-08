/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: 커피 가져오기
 *     tags: [coffeeInfo]
 *     parameters:
 *          - in: query
 *            name: name
 *            type: string
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: 아메리카노
 *                          kcal:
 *                              type: int
 *                              example: 5 
 */