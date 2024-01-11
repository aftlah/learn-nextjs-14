import AboutPage from "@/app/about/page"
import { render, screen } from "@testing-library/react"
import AboutLayout from "@/app/about/layout"


describe('About Page', () => {
    it('should render', () => {
        const page = render(
            <AboutLayout>
                <AboutPage />
            </AboutLayout>
        )
        expect(page).toMatchSnapshot()

    })
})


