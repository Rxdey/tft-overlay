/**
 * 通过id查找
 * @param {Number} id -基础物品id
 * @param {Array} array -基础物品列表
 */
export const getEquipmentById = (id, array) => array.find(item => item.equipId === id);
/**
 * 通过id查找合成项
 * @param {Number} id -基础物品id
 * @param {Array} array -合成物品列表
 */
export const getEquipmentRelation = (relateId, array, baseArray) => {
  const tempArray = array.filter(item => item.formula.split(',').includes(relateId));
  return tempArray.map(child => {
    const baseId = child.formula.split(',').find(m => m !== relateId) || relateId;
    return {
      ...child,
      base: getEquipmentById(baseId, baseArray)
    };
  });
};
  // .sort((a, b) => a.base.id - b.base.id);
