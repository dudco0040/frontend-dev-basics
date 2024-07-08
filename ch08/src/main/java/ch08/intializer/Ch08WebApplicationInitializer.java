package ch08.intializer;

import javax.servlet.Filter;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import ch08.config.WebConfig;

public class Ch08WebApplicationInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

	@Override
	protected Class<?>[] getRootConfigClasses() {   // 컨테이너 초기 설정 파일(class)
		return new Class<?>[] {};
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {  // webapplication 설정 파일
		return new Class<?>[] {WebConfig.class};
	}

	@Override
	protected Filter[] getServletFilters() {
		return new Filter[] {new CharacterEncodingFilter("UTF-8")};
	}

	@Override
	protected String[] getServletMappings() {
		return new String[] {"/"};
	}

}
