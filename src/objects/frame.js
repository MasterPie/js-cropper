import Point from "./point";
import Size from "./size";

const frameProportion = 0.85;

/**
 * Class representing a Frame element
 */
export default class Frame {
    /**
     * Create a frame
     */
    constructor() {
        this._width = 0;
        this._height = 0;
        this._origin = {
            x: 0,
            y: 0,
        };
    }

    /**
     * Update size and coordinates of rectangle (frame)
     *
     * @param {Object} parent - A parent node.
     * @return {Pattern} A Pattern object.
     */
    update(parent) {
        this._width = parent.width;
        this._height = parent.height;
        this._origin = {
            x: (parent.width - this._size) / 2,
            y: (parent.height - this._size) / 2,
        };
        return this;
    }

    /**
     * Get rectangle properties.
     *
     * @return {Object} - Object.point is an origin Point,
     * which in the upper-left corner and the rectangle extends towards the lower-right corner.
     * Object.size is a size that specifies the height and width of the rectangle.
     */
    getRect() {
        return {
            origin: new Point(this._origin.x, this._origin.y),
            size: new Size(this._width, this._height),
        }
    }

    /**
     * Get the smallest value of the x-coordinate for the rectangle.
     *
     * @return {Number} - The smallest value of the x-coordinate for the rectangle.
     */
    getMinX() {
        return this._origin.x;
    }
    
    /**
     * Get the largest value of the x-coordinate for the rectangle.
     *
     * @return {Number} - The largest value of the x-coordinate for the rectangle.
     */
    getMaxX() {
        return this._origin.x + this._width;
    }

    /**
     * Get the x- coordinate that establishes the center of a rectangle.
     *
     * @returns {Number} - The x-coordinate that establishes the center of a rectangle.
     */
    getMidX() {
        return this._origin.x + (this._width / 2);
    }

    /**
     * Get the smallest value of the x-coordinate for the rectangle.
     *
     * @return {Number} - The smallest value of the x-coordinate for the rectangle.
     */
    getMinY() {
        return this._origin.y;
    }

    /**
     * Get the largest value of the x-coordinate for the rectangle.
     *
     * @return {Number} - The largest value of the x-coordinate for the rectangle.
     */
    getMaxY() {
        return this._origin.y + this._height;
    }

    /**
     * Get the y-coordinate that establishes the center of the rectangle.
     *
     * @returns {Number} - The y-coordinate that establishes the center of a rectangle.
     */
    getMidY() {
        return this._origin.y + (this._height / 2);
    }
};