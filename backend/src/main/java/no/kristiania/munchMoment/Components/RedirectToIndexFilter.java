package no.kristiania.munchMoment.Components;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class RedirectToIndexFilter implements Filter {
    Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        String requestURI = req.getRequestURI();
        if (logger.isDebugEnabled()) logger.debug(requestURI);


        if (requestURI.startsWith("/api")) {
            chain.doFilter(request, response);
            return;
        }
        if (requestURI.startsWith("/static")) {
            chain.doFilter(request, response);
            return;
        }
        request.getRequestDispatcher("/index.html").forward(request, response);
    }
}
