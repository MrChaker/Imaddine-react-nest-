import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "../components/general/NavBar";
import NavEl from "../components/general/NavEl";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("testing NavBar", () => {
    beforeEach(() => {
        mockRouter.setCurrentUrl("/");
        render(
            <NavBar>
                <NavEl text="main" link="/" style="" activeStyle={"activoo"} />
                <NavEl
                    text="contact"
                    link="/contact"
                    style=""
                    activeStyle={"activoo"}
                />
            </NavBar>
        );
    });
    test("active element", async () => {
        const active = screen.getAllByTestId("main")[0];
        const notActive = screen.getAllByTestId("contact")[0];
        expect(active.classList.contains("activoo")).toBe(true);
        expect(notActive.classList.contains("activoo")).toBe(false);

        fireEvent.click(notActive); // switch to /contact
        expect(active.classList.contains("activoo")).toBe(false);
        expect(notActive.classList.contains("activoo")).toBe(true);

        fireEvent.click(active); // switch back to /
        expect(active.classList.contains("activoo")).toBe(true);
        expect(notActive.classList.contains("activoo")).toBe(false);
    });

    test("scrolled", () => {
        const nav = screen.getByRole("navigation");
        expect(nav.style.background).toBe("transparent");
        fireEvent.scroll(window, { target: { scrollY: 100 } });
        expect(nav.style.background == "transparent").toBeFalsy();
    });
    test("menu on small screen", () => {
        const menuBtn = screen.getByRole("menuBtn");
        const menu = screen.getByRole("menu");
        const exitBtn = screen.getByRole("exitBtn");
        expect(menu).toHaveClass("-translate-x-full");
        fireEvent.click(menuBtn);
        expect(menu).toHaveClass("translate-x-0");
        fireEvent.click(exitBtn);
        expect(menu).toHaveClass("-translate-x-full");
    });
});
