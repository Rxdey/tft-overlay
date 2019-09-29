/**
 * 通过id查找
 * @param {Number} id -基础物品id
 * @param {Array} array -基础物品列表
 */
export const getEquipmentById = (id, array) => array.filter(item => item.id === id)[0];
/**
 * 通过id查找合成项
 * @param {Number} id -基础物品id
 * @param {Array} array -合成物品列表
 */
export const getEquipmentRelation = (relateId, array, baseArray) => array
  .filter(item => item.relation.includes(relateId))
  .map(item => {
    const baseId = item.relation.filter(m => m !== relateId)[0] || relateId;
    return {
      ...item,
      base: getEquipmentById(baseId, baseArray)
    };
  })
  .sort((a, b) => a.base.id - b.base.id);
