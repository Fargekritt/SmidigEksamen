package no.kristiania.munchMoment;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class RedirectToIndexFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        String requestURI = req.getRequestURI();

        if (requestURI.startsWith("/api")) {
            chain.doFilter(request, response);
            return;
        }

        if (requestURI.startsWith("/*")) {
            chain.doFilter(request, response);
            return;
        }

        // all requests not api or static will be forwarded to index page.
        request.getRequestDispatcher("/").forward(request, response);
    }
}
