import { expect } from "chai";
import jsdom from "jsdom-global";
import Canvas from "./canvas";

describe("Canvas component", function() {
    let canvas, wrapper;

    beforeEach(() => {
        jsdom();
        canvas = new Canvas();

        wrapper = document.createElement("div");
        wrapper.className = "wrapper";
        document.body.appendChild(wrapper);
    });

    afterEach(() => {
        jsdom();
    });

    it("initialises", () => {
        expect(canvas).to.not.equal(undefined);
    });

    it("has setWidth method, which set width style property to canvas element", () => {
        let width = 100;

        canvas.setWidth(width);
        canvas.render(wrapper);

        const canvasNode = wrapper.querySelector("canvas");
        expect(canvasNode.style.width).to.equal(`${width}px`);
    });

    it("has setHeight method, which set height style property to canvas element", () => {
        let height = 150;

        canvas.setHeight(height);
        canvas.render(wrapper);

        const canvasNode = wrapper.querySelector("canvas");
        expect(canvasNode.style.height).to.equal(`${height}px`);
    });
});