﻿using Localization.Resources.AbpUi;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Bootstrap;
using Volo.Abp.AutoMapper;
using Volo.Abp.Localization;
using Volo.Abp.Localization.Resources.AbpValidation;
using Volo.Abp.Modularity;
using Volo.Abp.UI;
using Volo.Abp.UI.Navigation;
using Volo.Abp.VirtualFileSystem;
using Volo.Docs.Admin.Navigation;
using Volo.Docs.Localization;

namespace Volo.Docs.Admin
{
    [DependsOn(
        typeof(DocsAdminHttpApiModule),
        typeof(AbpAspNetCoreMvcUiBootstrapModule)
        )]
    public class DocsAdminWebModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
            {
                options.AddAssemblyResource(typeof(DocsResource), typeof(DocsAdminWebModule).Assembly);
            });

            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(DocsAdminWebModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {

            Configure<NavigationOptions>(options =>
            {
                options.MenuContributors.Add(new DocsMenuContributor());
            });

            Configure<VirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<DocsAdminWebModule>("Volo.Docs.Admin");
            });

            context.Services.AddAutoMapperObjectMapper<DocsAdminWebModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<DocsAdminWebAutoMapperProfile>(validate: true);
            });
        }
    }
}
