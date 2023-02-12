
/**
 * @swagger
 * /users:
 *   get:
 *     summary: 유저목록 가져오기
 *     tags: [Users] 
 *     responses:
 *       200:
 *         description: 성공
 */


/**
 * @swagger
 * /users:
 *   post:
 *     summary: 회원가입 등록
 *     tags: [Users]
 *     parameters:
 *          - in: query
 *            required: true
 *            name: name
 *            type: String
 *            example:
 *              name: "춘식이"
 *          - in: query
 *            required: true
 *            name: email
 *            type: String
 *            example:
 *              email: "chunsik@kakao.com"
 *          - in: query
 *            required: true
 *            name: personal
 *            type: String
 *            example:
 *              personal: "200101-1111111"
 *          - in: query
 *            required: true
 *            name: prefer
 *            type: String
 *            example:
 *              prefer: "https://kakao.com"
 *          - in: query
 *            required: true
 *            name: pwd
 *            type: String
 *            example:
 *              pwd: "pass123#"
 *          - in: query
 *            required: true
 *            name: phone
 *            type: String
 *            example:
 *              phone: "01011112222"
 *     responses:
 *       200:
 *         description: 인증완료
 */