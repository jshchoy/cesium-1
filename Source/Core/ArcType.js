/**
 * ArcType defines the path that should be taken connecting vertices.
 *
 * @enum {number}
 */
var ArcType = {
  /**
   * Straight line that does not conform to the surface of the ellipsoid.
   *
   * @type {number}
   * @constant
   */
  NONE: 0,

  /**
   * Follow geodesic path.
   *
   * @type {number}
   * @constant
   */
  GEODESIC: 1,

  /**
   * Follow rhumb or loxodrome path.
   *
   * @type {number}
   * @constant
   */
  RHUMB: 2,
};
export default Object.freeze(ArcType);
