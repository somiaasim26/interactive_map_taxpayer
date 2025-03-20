var wms_layers = [];


        var lyr_WorldStreets_0 = new ol.layer.Tile({
            'title': 'World Streets',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_WorldImagery_1 = new ol.layer.Tile({
            'title': 'World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>',
                url: 'https://clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_EnforcementTowns_2 = new ol.format.GeoJSON();
var features_EnforcementTowns_2 = format_EnforcementTowns_2.readFeatures(json_EnforcementTowns_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnforcementTowns_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnforcementTowns_2.addFeatures(features_EnforcementTowns_2);
var lyr_EnforcementTowns_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnforcementTowns_2, 
                style: style_EnforcementTowns_2,
                popuplayertitle: 'Enforcement Towns',
                interactive: false,
    title: 'Enforcement Towns<br />\
    <img src="styles/legend/EnforcementTowns_2_0.png" /> Aziz Bhatti Town<br />\
    <img src="styles/legend/EnforcementTowns_2_1.png" /> Cantonment<br />\
    <img src="styles/legend/EnforcementTowns_2_2.png" /> Data Gunj Buksh Town<br />\
    <img src="styles/legend/EnforcementTowns_2_3.png" /> Gulberg Town<br />\
    <img src="styles/legend/EnforcementTowns_2_4.png" /> Iqbal Town<br />\
    <img src="styles/legend/EnforcementTowns_2_5.png" /> Nishtar Town<br />\
    <img src="styles/legend/EnforcementTowns_2_6.png" /> Ravi Town<br />\
    <img src="styles/legend/EnforcementTowns_2_7.png" /> Samanabad Town<br />\
    <img src="styles/legend/EnforcementTowns_2_8.png" /> Shalamar Town<br />\
    <img src="styles/legend/EnforcementTowns_2_9.png" /> Wagha Town<br />' });
var format_NotanActiveTaxPayer_3 = new ol.format.GeoJSON();
var features_NotanActiveTaxPayer_3 = format_NotanActiveTaxPayer_3.readFeatures(json_NotanActiveTaxPayer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NotanActiveTaxPayer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NotanActiveTaxPayer_3.addFeatures(features_NotanActiveTaxPayer_3);
var lyr_NotanActiveTaxPayer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NotanActiveTaxPayer_3, 
                style: style_NotanActiveTaxPayer_3,
                popuplayertitle: 'Not an Active Tax Payer',
                interactive: true,
    title: 'Not an Active Tax Payer<br />\
    <img src="styles/legend/NotanActiveTaxPayer_3_0.png" /> No [2727]<br />' });
var format_ActiveTaxPayer_4 = new ol.format.GeoJSON();
var features_ActiveTaxPayer_4 = format_ActiveTaxPayer_4.readFeatures(json_ActiveTaxPayer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActiveTaxPayer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActiveTaxPayer_4.addFeatures(features_ActiveTaxPayer_4);
var lyr_ActiveTaxPayer_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ActiveTaxPayer_4, 
                style: style_ActiveTaxPayer_4,
                popuplayertitle: 'Active Tax Payer',
                interactive: true,
    title: 'Active Tax Payer<br />\
    <img src="styles/legend/ActiveTaxPayer_4_0.png" />  Yes [238]<br />' });
var group_TaxPayerStatus = new ol.layer.Group({
                                layers: [lyr_NotanActiveTaxPayer_3,lyr_ActiveTaxPayer_4,],
                                fold: "open",
                                title: 'Tax Payer Status'});

lyr_WorldStreets_0.setVisible(true);lyr_WorldImagery_1.setVisible(true);lyr_EnforcementTowns_2.setVisible(true);lyr_NotanActiveTaxPayer_3.setVisible(true);lyr_ActiveTaxPayer_4.setVisible(true);
var layersList = [lyr_WorldStreets_0,lyr_WorldImagery_1,lyr_EnforcementTowns_2,group_TaxPayerStatus];
lyr_EnforcementTowns_2.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Officer_ID': 'Officer_ID', });
lyr_NotanActiveTaxPayer_3.set('fieldAliases', {'FID_': 'FID_', 'ID': 'ID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Name': 'Name', 'Address': 'Address', 'hdbscan_cl': 'hdbscan_cl', 'reassigned': 'reassigned', 'Tehsil': 'Tehsil', 'UC_Name': 'UC_Name', 'UC_No': 'UC_No', 'Rank': 'Rank', 'Compliance': 'Compliance', 'Exists_Nov': 'Exists_Nov', 'Reg_Nov': 'Reg_Nov', 'Exists_Jun': 'Exists_Jun', 'Reg_Jun': 'Reg_Jun', 'Existed': 'Existed', 'Town': 'Town', 'Officer_ID': 'Officer_ID', 'COMPUTER_N': 'COMPUTER_N', 'Branch': 'Branch', 'NTN': 'NTN', 'Filer_June': 'Filer_June', 'Filer_May': 'Filer_May', 'Tax Payer': 'Tax Payer', 'Tax Payer_': 'Tax Payer_', 'Closed_Mul': 'Closed_Mul', 'Multiple_B': 'Multiple_B', 'Status': 'Status', 'Comments__': 'Comments__', });
lyr_ActiveTaxPayer_4.set('fieldAliases', {'FID_': 'FID_', 'ID': 'ID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Name': 'Name', 'Address': 'Address', 'hdbscan_cl': 'hdbscan_cl', 'reassigned': 'reassigned', 'Tehsil': 'Tehsil', 'UC_Name': 'UC_Name', 'UC_No': 'UC_No', 'Rank': 'Rank', 'Compliance': 'Compliance', 'Exists_Nov': 'Exists_Nov', 'Reg_Nov': 'Reg_Nov', 'Exists_Jun': 'Exists_Jun', 'Reg_Jun': 'Reg_Jun', 'Existed': 'Existed', 'Town': 'Town', 'Officer_ID': 'Officer_ID', 'COMPUTER_N': 'COMPUTER_N', 'Branch': 'Branch', 'NTN': 'NTN', 'Filer_June': 'Filer_June', 'Filer_May': 'Filer_May', 'Tax Payer': 'Tax Payer', 'Tax Payer_': 'Tax Payer_', 'Closed_Mul': 'Closed_Mul', 'Multiple_B': 'Multiple_B', 'Status': 'Status', 'Comments__': 'Comments__', });
lyr_EnforcementTowns_2.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Officer_ID': 'Range', });
lyr_NotanActiveTaxPayer_3.set('fieldImages', {'FID_': 'TextEdit', 'ID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'hdbscan_cl': 'TextEdit', 'reassigned': 'TextEdit', 'Tehsil': 'TextEdit', 'UC_Name': 'TextEdit', 'UC_No': 'TextEdit', 'Rank': 'TextEdit', 'Compliance': 'TextEdit', 'Exists_Nov': 'TextEdit', 'Reg_Nov': 'TextEdit', 'Exists_Jun': 'TextEdit', 'Reg_Jun': 'TextEdit', 'Existed': 'TextEdit', 'Town': 'TextEdit', 'Officer_ID': 'TextEdit', 'COMPUTER_N': 'TextEdit', 'Branch': 'TextEdit', 'NTN': 'TextEdit', 'Filer_June': 'TextEdit', 'Filer_May': 'TextEdit', 'Tax Payer': 'TextEdit', 'Tax Payer_': 'TextEdit', 'Closed_Mul': 'TextEdit', 'Multiple_B': 'TextEdit', 'Status': 'TextEdit', 'Comments__': 'TextEdit', });
lyr_ActiveTaxPayer_4.set('fieldImages', {'FID_': 'TextEdit', 'ID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'hdbscan_cl': 'TextEdit', 'reassigned': 'TextEdit', 'Tehsil': 'TextEdit', 'UC_Name': 'TextEdit', 'UC_No': 'TextEdit', 'Rank': 'TextEdit', 'Compliance': 'TextEdit', 'Exists_Nov': 'TextEdit', 'Reg_Nov': 'TextEdit', 'Exists_Jun': 'TextEdit', 'Reg_Jun': 'TextEdit', 'Existed': 'TextEdit', 'Town': 'TextEdit', 'Officer_ID': 'TextEdit', 'COMPUTER_N': 'TextEdit', 'Branch': 'TextEdit', 'NTN': 'TextEdit', 'Filer_June': 'TextEdit', 'Filer_May': 'TextEdit', 'Tax Payer': 'TextEdit', 'Tax Payer_': 'TextEdit', 'Closed_Mul': 'TextEdit', 'Multiple_B': 'TextEdit', 'Status': 'TextEdit', 'Comments__': 'TextEdit', });
lyr_EnforcementTowns_2.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Officer_ID': 'hidden field', });
lyr_NotanActiveTaxPayer_3.set('fieldLabels', {'FID_': 'hidden field', 'ID': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'hdbscan_cl': 'hidden field', 'reassigned': 'hidden field', 'Tehsil': 'inline label - visible with data', 'UC_Name': 'inline label - visible with data', 'UC_No': 'hidden field', 'Rank': 'hidden field', 'Compliance': 'inline label - visible with data', 'Exists_Nov': 'hidden field', 'Reg_Nov': 'hidden field', 'Exists_Jun': 'hidden field', 'Reg_Jun': 'hidden field', 'Existed': 'inline label - visible with data', 'Town': 'inline label - visible with data', 'Officer_ID': 'inline label - visible with data', 'COMPUTER_N': 'hidden field', 'Branch': 'hidden field', 'NTN': 'inline label - visible with data', 'Filer_June': 'hidden field', 'Filer_May': 'hidden field', 'Tax Payer': 'inline label - visible with data', 'Tax Payer_': 'hidden field', 'Closed_Mul': 'hidden field', 'Multiple_B': 'hidden field', 'Status': 'inline label - visible with data', 'Comments__': 'hidden field', });
lyr_ActiveTaxPayer_4.set('fieldLabels', {'FID_': 'hidden field', 'ID': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'hdbscan_cl': 'hidden field', 'reassigned': 'hidden field', 'Tehsil': 'inline label - visible with data', 'UC_Name': 'inline label - visible with data', 'UC_No': 'hidden field', 'Rank': 'hidden field', 'Compliance': 'inline label - visible with data', 'Exists_Nov': 'hidden field', 'Reg_Nov': 'hidden field', 'Exists_Jun': 'hidden field', 'Reg_Jun': 'hidden field', 'Existed': 'inline label - visible with data', 'Town': 'inline label - visible with data', 'Officer_ID': 'inline label - visible with data', 'COMPUTER_N': 'hidden field', 'Branch': 'hidden field', 'NTN': 'inline label - visible with data', 'Filer_June': 'hidden field', 'Filer_May': 'hidden field', 'Tax Payer': 'inline label - visible with data', 'Tax Payer_': 'hidden field', 'Closed_Mul': 'hidden field', 'Multiple_B': 'hidden field', 'Status': 'inline label - visible with data', 'Comments__': 'hidden field', });
lyr_ActiveTaxPayer_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});