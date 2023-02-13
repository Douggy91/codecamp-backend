
/**
 * @swagger
 * /tokens/phone:
 *   post:
 *     summary: 인증토크 발급받기
 *     tags: [Tokens]
 *     parameters:
 *          - in: query
 *            required: true
 *            name: phone
 *            type: int
 *            example:
 *              phone: "01011112222"
 *     responses:
 *       200:
 *         description: 핸드폰으로 인증 문자가 전송되었습니다.
 */

/**
 * @swagger
 * /tokens/phone:
 *   patch:
 *     summary: 토큰 인증하기
 *     tags: [Tokens]
 *     parameters:
 *          - in: query
 *            required: true
 *            name: phone
 *            type: String
 *            example:
 *              phone: "01011112222"
 *          - in: query
 *            required: true
 *            name: token
 *            type: String
 *            example:
 *              token: 065274
 *     responses:
 *       200:
 *         description: 인증완료
 */
