import type { McpToolDefinition } from '../types.js';

export const customFieldsTools: [string, McpToolDefinition][] = [
  ["app_ids_by_category", {
    name: "app_ids_by_category",
    description: `Retrieve app IDs from a given release/updated date range and category.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["ios","android"],"type":"string","description":"Operating System"},"category":{"type":"string","description":"Category to filter by"},"release_start_date":{"type":"string","description":"Release start date (YYYY-MM-DD)"},"release_end_date":{"type":"string","description":"Release end date (YYYY-MM-DD)"},"updated_start_date":{"type":"string","description":"Updated start date (YYYY-MM-DD)"},"updated_end_date":{"type":"string","description":"Updated end date (YYYY-MM-DD)"},"limit":{"default":100,"type":"number","description":"Maximum number of results to return (default 100)"},"offset":{"type":"number","description":"Offset for pagination"}},"required":["os"]},
    method: "get",
    pathTemplate: "/v1/{os}/apps/app_ids",
    executionParameters: [{"name":"os","in":"path"},{"name":"category","in":"query"},{"name":"release_start_date","in":"query"},{"name":"release_end_date","in":"query"},{"name":"updated_start_date","in":"query"},{"name":"updated_end_date","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["publisher_apps", {
    name: "publisher_apps",
    description: `Retrieve apps for a particular publisher.`,
    inputSchema: {"type":"object","properties":{"os":{"enum":["ios","android"],"type":"string","description":"Operating System"},"publisher_id":{"type":"string","description":"Publisher ID"}},"required":["os","publisher_id"]},
    method: "get",
    pathTemplate: "/v1/{os}/publisher/publisher_apps",
    executionParameters: [{"name":"os","in":"path"},{"name":"publisher_id","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["unified_publisher_apps", {
    name: "unified_publisher_apps",
    description: `Retrieve a unified publisher and all of its apps across platforms.`,
    inputSchema: {"type":"object","properties":{"unified_id":{"type":"string","description":"Unified publisher ID"}},"required":["unified_id"]},
    method: "get",
    pathTemplate: "/v1/unified/publishers/apps",
    executionParameters: [{"name":"unified_id","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["unified_apps", {
    name: "unified_apps",
    description: `Retrieve iOS/Android app IDs for unified apps.`,
    inputSchema: {"type":"object","properties":{"app_ids":{"type":"array","items":{"type":"string"},"description":"Array of unified app IDs"}},"required":["app_ids"]},
    method: "get",
    pathTemplate: "/v1/unified/apps",
    executionParameters: [{"name":"app_ids","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["unified_publishers", {
    name: "unified_publishers",
    description: `Retrieve iOS/Android publisher IDs for unified publishers.`,
    inputSchema: {"type":"object","properties":{"publisher_ids":{"type":"array","items":{"type":"string"},"description":"Array of unified publisher IDs"}},"required":["publisher_ids"]},
    method: "get",
    pathTemplate: "/v1/unified/publishers",
    executionParameters: [{"name":"publisher_ids","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["tags_for_apps", {
    name: "tags_for_apps",
    description: `Retrieve global or custom fields and tag values for apps.`,
    inputSchema: {"type":"object","properties":{"app_ids":{"type":"array","items":{"type":"string"},"description":"Array of app IDs"},"include_global_tags":{"default":true,"type":"boolean","description":"Include global tags (default true)"}},"required":["app_ids"]},
    method: "get",
    pathTemplate: "/v1/app_tag/tags_for_apps",
    executionParameters: [{"name":"app_ids","in":"query"},{"name":"include_global_tags","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["apps_by_tag", {
    name: "apps_by_tag",
    description: `Retrieve apps that have a particular global or custom field tag value.`,
    inputSchema: {"type":"object","properties":{"tag_id":{"type":"string","description":"Tag ID"},"value":{"type":"string","description":"Tag value to filter by"},"limit":{"default":100,"type":"number","description":"Maximum number of results to return (default 100)"},"offset":{"type":"number","description":"Offset for pagination"}},"required":["tag_id","value"]},
    method: "get",
    pathTemplate: "/v1/app_tag/apps",
    executionParameters: [{"name":"tag_id","in":"query"},{"name":"value","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["custom_field_list", {
    name: "custom_field_list",
    description: `Retrieve global or custom fields and app tags with summarized app counts.`,
    inputSchema: {"type":"object","properties":{"include_global_tags":{"default":true,"type":"boolean","description":"Include global tags (default true)"}}},
    method: "get",
    pathTemplate: "/v1/custom_field/custom_field_list",
    executionParameters: [{"name":"include_global_tags","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["add_tag_for_app", {
    name: "add_tag_for_app",
    description: `Add a tag value to a custom field for an app.`,
    inputSchema: {"type":"object","properties":{"app_id":{"type":"string","description":"App ID"},"tag_id":{"type":"string","description":"Tag ID"},"value":{"type":"string","description":"Tag value to add"}},"required":["app_id","tag_id","value"]},
    method: "post",
    pathTemplate: "/v1/app_tag/add_tag_for_app",
    executionParameters: [{"name":"app_id","in":"query"},{"name":"tag_id","in":"query"},{"name":"value","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["edit_tag", {
    name: "edit_tag",
    description: `Edit a tag value from a custom field for an app.`,
    inputSchema: {"type":"object","properties":{"app_id":{"type":"string","description":"App ID"},"tag_id":{"type":"string","description":"Tag ID"},"value":{"type":"string","description":"New tag value"}},"required":["app_id","tag_id","value"]},
    method: "post",
    pathTemplate: "/v1/app_tag/edit_tag",
    executionParameters: [{"name":"app_id","in":"query"},{"name":"tag_id","in":"query"},{"name":"value","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["remove_tag_for_app", {
    name: "remove_tag_for_app",
    description: `Remove a tag value from a custom field for an app.`,
    inputSchema: {"type":"object","properties":{"app_id":{"type":"string","description":"App ID"},"tag_id":{"type":"string","description":"Tag ID"},"value":{"type":"string","description":"Tag value to remove"}},"required":["app_id","tag_id","value"]},
    method: "post",
    pathTemplate: "/v1/app_tag/remove_tag_for_app",
    executionParameters: [{"name":"app_id","in":"query"},{"name":"tag_id","in":"query"},{"name":"value","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["change_all_values_matching", {
    name: "change_all_values_matching",
    description: `Change all tags matching a value to a new value in a custom field.`,
    inputSchema: {"type":"object","properties":{"tag_id":{"type":"string","description":"Tag ID"},"old_value":{"type":"string","description":"Current tag value to match"},"new_value":{"type":"string","description":"New tag value to replace with"}},"required":["tag_id","old_value","new_value"]},
    method: "post",
    pathTemplate: "/v1/custom_field/change_all_values_matching",
    executionParameters: [{"name":"tag_id","in":"query"},{"name":"old_value","in":"query"},{"name":"new_value","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["remove_custom_field", {
    name: "remove_custom_field",
    description: `Remove a custom field entirely.`,
    inputSchema: {"type":"object","properties":{"tag_id":{"type":"string","description":"Tag ID of the custom field to remove"}},"required":["tag_id"]},
    method: "post",
    pathTemplate: "/v1/custom_field/remove_custom_field",
    executionParameters: [{"name":"tag_id","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["create_custom_fields_filter", {
    name: "create_custom_fields_filter",
    description: `Create a custom fields filter for use with other endpoints.`,
    inputSchema: {"type":"object","properties":{"name":{"type":"string","description":"Filter name"},"filters":{"type":"string","description":"JSON encoded filter object"}},"required":["name","filters"]},
    method: "post",
    pathTemplate: "/v1/custom_fields_filter",
    executionParameters: [{"name":"name","in":"query"},{"name":"filters","in":"query"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["get_custom_fields_filter", {
    name: "get_custom_fields_filter",
    description: `Retrieve a custom fields filter by its ID.`,
    inputSchema: {"type":"object","properties":{"id":{"type":"string","description":"Custom fields filter ID"}},"required":["id"]},
    method: "get",
    pathTemplate: "/v1/custom_fields_filter/{id}",
    executionParameters: [{"name":"id","in":"path"}],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
  ["get_custom_fields_filter_values", {
    name: "get_custom_fields_filter_values",
    description: `Retrieve available fields and values for custom fields filters.`,
    inputSchema: {"type":"object","properties":{}},
    method: "get",
    pathTemplate: "/v1/custom_fields_filter/fields_values",
    executionParameters: [],
    requestBodyContentType: undefined,
    securityRequirements: [{"auth_token":[]}]
  }],
];
